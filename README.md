# 📚 SMS Agent Library Documentation

## 1. Overview

The **SMS Agent Library** is a TypeScript-based library designed to send and manage SMS messages through an API. It includes modules for OTP handling, quick sends, user profile management, and report generation.

---

## 2. Installation

```bash
yarn add sms-agent-lib
```

or

```bash
npm install sms-agent-lib
```

---

## 3. Configuration

Create a `.env` file:

```
TOKEN=your-develop-token
```

---

## 4. Usage Example

### TypeScript Example

```typescript
import {SmsAgentLib, OtpSendRequest} from "sms-agent-lib"

const smsAgent = new SmsAgentLib(process.env.TOKEN)

const otpData: OtpSendRequest = {
  sender_id: "IMSOLOVELY",
  country_code: "TH",
  recipient: "0888888888",
  message: "Your OTP is 1234",
  ref_code: "1Q2Q",
  validity: 5,
  digit: 4
}

smsAgent.otp.send(otpData).then(console.log).catch(console.error)
```

---

### JavaScript Example

```js
const {SmsAgentLib} = require("sms-agent-lib")
require("dotenv").config()

const smsAgent = new SmsAgentLib(process.env.TOKEN)

smsAgent.otp
  .send({
    sender_id: "IMSOLOVELY",
    country_code: "TH",
    recipient: "0888888888",
    message: "Your OTP is 1234",
    ref_code: "1Q2Q",
    validity: 5,
    digit: 4
  })
  .then(console.log)
  .catch(console.error)
```

---

## 4.5 User Profile

```typescript
smsAgent.profile.me().then(console.log).catch(console.error)
smsAgent.profile.plan().then(console.log).catch(console.error)
smsAgent.profile.balance().then(console.log).catch(console.error)
```

**Sample Responses:**

- **me:**

```json
{
  "email": "example@sms-global.com",
  "name": "SMS Agent",
  "phone": "0888888888",
  "credit": 9999,
  "address": {
    "line_1": "adress1",
    "line_2": "adress2",
    "country": "Thailand",
    "website": "http://sms-global.com",
    "district": "Bangkok",
    "province": "Bangkok",
    "postal_code": "10310",
    "business_type": "LL"
  },
  "kyc_status": "UNDEFINED",
  "enable": true
}
```

- **plan:**

```json
{
  "name": "Free",
  "description": "A simple start for everyone",
  "options": {
    "sms_max": 100000,
    "send_spam_message": false,
    "per_unit_price": 1,
    "create_sub_account": true,
    "api_access": true,
    "maximum_sender": 1,
    "expired_in": 3,
    "expired_in_unit": "month"
  }
}
```

- **balance:**

```json
{
  "credit": 9999,
  "checkBalanceAt": "2025-03-05T08:07:17.321Z"
}
```

---

## 4.6 Reports

```typescript
smsAgent.report.otp({page: 1, limit: 10}).then(console.log).catch(console.error)

smsAgent.report.quicksend({page: 1, limit: 10}).then(console.log).catch(console.error)
```

---

### Quick Send Example

```typescript
smsAgent.quicksend
  .send({
    sender_id: "IMSOLOVELY",
    country_code: "TH",
    recipient: "0888888888",
    message: "This is a quick send message"
  })
  .then(console.log)
  .catch(console.error)
```

**Sample Response:**

```json
{
  "message": "Request sent successfully"
}
```

---

## 5. Error Handling

- **Common Errors:**
  - `REQUEST_FAILED`: On HTTP request failure.
  - `NO_DATA_RETURNED`: When no data is returned by the API.
  - `INVALID_SECRET`: When the secret is missing.

---

## 6. Conclusion

The SMS Agent Library is a comprehensive solution for SMS management, providing type-safe DTOs and a modular API design.
