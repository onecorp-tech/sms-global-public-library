# SMS Global Public Library

A library for interacting with the SMS Global API, providing services for OTP, Quick Send, Reports, and Profile management.

## Installation

Install the library using npm:

```bash
npm install sms-global-public-library
```

## Usage

### Importing the Library

#### JavaScript

```javascript
const {SmsAgentLib} = require("sms-global-public-library")
```

#### TypeScript

```typescript
import {SmsAgentLib} from "sms-global-public-library"
```

### Initializing the Library

#### JavaScript

```javascript
const secret = "your-secret-key"
const smsAgent = new SmsAgentLib(secret)
```

#### TypeScript

```typescript
const secret = "your-secret-key"
const smsAgent = new SmsAgentLib(secret)
```

### OTP Service

#### Send OTP

#### JavaScript

```javascript
const otpSendRequest = {
  phone: "66874844476",
  message: "Your OTP code is {code}",
  code_length: 4
}

smsAgent.otp
  .send(otpSendRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
const otpSendRequest: OtpSendRequest = {
  phone: "66874844476",
  message: "Your OTP code is {code}",
  code_length: 4
}

smsAgent.otp
  .send(otpSendRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

#### Verify OTP

#### JavaScript

```javascript
const verifyOtpRequest = {
  phone: "66874844476",
  code: "1234"
}

smsAgent.otp
  .verify(verifyOtpRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
const verifyOtpRequest: VerifyOtpRequest = {
  phone: "66874844476",
  code: "1234"
}

smsAgent.otp
  .verify(verifyOtpRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

#### Resend OTP

#### JavaScript

```javascript
const otpResendRequest = {
  phone: "66874844476"
}

smsAgent.otp
  .resend(otpResendRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
const otpResendRequest: OtpResendRequest = {
  phone: "66874844476"
}

smsAgent.otp
  .resend(otpResendRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

### Quick Send Service

#### Send Quick Message

#### JavaScript

```javascript
const quickSendRequest = {
  from: "IMSOLOVELY",
  to: "66874844476",
  message: "Hello world!"
}

smsAgent.quicksend
  .send(quickSendRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
const quickSendRequest: QuickSendRequest = {
  from: "IMSOLOVELY",
  to: "66874844476",
  message: "Hello world!"
}

smsAgent.quicksend
  .send(quickSendRequest)
  .then(response => console.log(response))
  .catch(error => console.error(error))
```

### Report Service

#### Get Quick Send Report

#### JavaScript

```javascript
const paginationOptions = {
  page: 1,
  limit: 10
}

smsAgent.report
  .quicksend(paginationOptions)
  .then(report => console.log(report))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
const paginationOptions: IPaginationOptions = {
  page: 1,
  limit: 10
}

smsAgent.report
  .quicksend(paginationOptions)
  .then(report => console.log(report))
  .catch(error => console.error(error))
```

#### Get OTP Report

#### JavaScript

```javascript
smsAgent.report
  .otp(paginationOptions)
  .then(report => console.log(report))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
smsAgent.report
  .otp(paginationOptions)
  .then(report => console.log(report))
  .catch(error => console.error(error))
```

### Profile Service

#### Get Profile Information

#### JavaScript

```javascript
smsAgent.profile
  .me()
  .then(profile => console.log(profile))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
smsAgent.profile
  .me()
  .then(profile => console.log(profile))
  .catch(error => console.error(error))
```

#### Get Plan Information

#### JavaScript

```javascript
smsAgent.profile
  .plan()
  .then(plan => console.log(plan))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
smsAgent.profile
  .plan()
  .then(plan => console.log(plan))
  .catch(error => console.error(error))
```

#### Get Balance Information

#### JavaScript

```javascript
smsAgent.profile
  .balance()
  .then(balance => console.log(balance))
  .catch(error => console.error(error))
```

#### TypeScript

```typescript
smsAgent.profile
  .balance()
  .then(balance => console.log(balance))
  .catch(error => console.error(error))
```

## API Reference

### SmsAgentLib

#### Constructor

```typescript
constructor(secret: string, baseUrl?: string)
```

- `secret`: Your API secret key.
- `baseUrl`: (Optional) The base URL for the API. Defaults to `https://api.dev.sms.onesiamsoft.com`.

#### Properties

- `otp`: Instance of `OtpService`.
- `quicksend`: Instance of `QuickSendService`.
- `report`: Instance of `ReportService`.
- `profile`: Instance of `ProfileService`.

### OtpService

#### Methods

- `send(request: OtpSendRequest): Promise<OtpSendResponse>`
- `verify(request: VerifyOtpRequest): Promise<OtpVerifyResponse>`
- `resend(request: OtpResendRequest): Promise<OtpSendResponse>`

### QuickSendService

#### Methods

- `send(request: QuickSendRequest): Promise<QuickSendResponse>`

### ReportService

#### Methods

- `quicksend(request: IPaginationOptions): Promise<IReport>`
- `otp(request: IPaginationOptions): Promise<IReport>`

### ProfileService

#### Methods

- `me(): Promise<IUser>`
- `plan(): Promise<IPlan>`
- `balance(): Promise<IBalance>`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
