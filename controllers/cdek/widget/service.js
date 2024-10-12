const axios = require('axios');
const bodyParser = require('body-parser');

class Service {
    constructor(login, secret, baseUrl = 'https://api.edu.cdek.ru/v2/') {
        this.login = login;
        this.secret = secret;
        this.baseUrl = baseUrl;
        this.authToken = '';
    }

    async process(req, res) {
        const requestData = { ...req.query, ...req.body };

        if (!requestData.action) {
            return this.sendValidationError(res, 'Action is required');
        }

        await this.getAuthToken();

        try {
            switch (requestData.action) {
                case 'offices':
                    return this.sendResponse(res, await this.getOffices(requestData));
                case 'calculate':
                    return this.sendResponse(res, await this.calculate(requestData));
                default:
                    return this.sendValidationError(res, 'Unknown action');
            }
        } catch (error) {
            return this.sendValidationError(res, error.message);
        }
    }

    sendValidationError(res, message) {
        res.status(400).json({ message });
    }

    async getAuthToken() {
        try{
        const response = await axios.post(`${this.baseUrl}oauth/token`, null, {
            params: {
                grant_type: 'client_credentials',
                client_id: this.login,
                client_secret: this.secret,
            },
            headers: {
                'Accept': 'application/json',
                'X-App-Name': 'widget_pvz',
            },
        });

        if (!response.data.access_token) {
            throw new Error('Server not authorized to CDEK API');
        }

        this.authToken = response.data.access_token;
    } catch(error) {
        console.log(error)
    }
    }

    async httpRequest(method, data, useJson = false) {
        const headers = {
            'Accept': 'application/json',
            'X-App-Name': 'widget_pvz',
        };

        if (this.authToken) {
            headers['Authorization'] = `Bearer ${this.authToken}`;
        }

        const url = `${this.baseUrl}${method}`;

        if (useJson) {
            return axios.post(url, data, { headers });
        } else {
            return axios.get(url, { headers, params: data });
        }
    }

    async getOffices(requestData) {
        return this.httpRequest('deliverypoints', requestData);
    }

    async calculate(requestData) {
        return this.httpRequest('calculator/tarifflist', requestData, true);
    }

    sendResponse(res, data) {
        res.status(200).json(data.data);
    }
}

module.exports = new Service("wqGwiQx0gg8mLtiEKsUinjVSICCjtTEP", "RmAmgvSgSl1yirlz9QupbzOJVqhCxcP5");