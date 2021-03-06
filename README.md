# PayU Widget implementation

![Example](./.github/preview.png)

## Start app

1. npm install
2. `cp example.env env`
3. change variables in `.env` file
4. copy `/tests/fixtures/example.mockData.json` to `mockData.json`
5. change values in `mockData.json` to yours
6. npm run dev
7. app running on: http://localhost:3003

## Environments

- SANDBOX: https://secure.snd.payu.com
- PRODUCTION: https://secure.payu.com

## Cards

In order to test card payments on sandbox, please use the following credentials.

| Card issuer | Number           | Month | Year | CVV | 3-D Secure | Behavior                                                                              |
|-------------|------------------|-------|------|-----|------------|---------------------------------------------------------------------------------------|
| Visa        | 4444333322221111 | 01    | 21   | 123 | no         | Positive authorization                                                                |
| MasterCard  | 5434021016824014 | 01    | 21   | 123 | no         | Positive authorization                                                                |
| Maestro     | 5099802211165618 | 01    | 21   | 123 | no         | Positive authorization. CVV is not required in single click payments (PayU | Express) |
| Visa        | 4012001037141112 | 01    | 21   | 123 | yes        | Positive authorization                                                                |
| Maestro     | 5000105018126595 | 01    | 21   | 123 | no         | Negative authorization                                                                |
| Visa        | 4000398284360    | 01    | 21   | 123 | no         | Negative authorization                                                                |
