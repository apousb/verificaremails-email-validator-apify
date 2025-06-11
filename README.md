# VerificarEmails - Single Email Validation

This actor validates a single email address using the API provided by [VerificarEmails.com](https://www.verificaremails.com).

## ?? What it does

It sends a request to:

```
https://dashboard.verificaremails.com/myapi/email/validate/single?auth-token=YOUR_TOKEN&term=EMAIL
```

and returns a structured JSON response containing the verification result.

---

## ?? Input

```json
{
  "email": "example@domain.com",
  "token": "your_api_token"
}
```

Both fields are required.

---

## ?? Output

The result is a JSON array with the validation data:

```json
[
  {
    "id": "2786850",
    "term": "antxon.pous@gmail.com",
    "request_id": "2786850",
    "result_code": "112",
    "result_type": "Ok",
    "result": {
      "status": "ok"
    }
  }
]
```

---

## ?? Local usage (optional)

```bash
npm install
npm start
```

---

## ?? API Documentation

For full documentation, response details, and more advanced features, visit:  
?? [https://www.verificaremails.com/docs/en/](https://www.verificaremails.com/docs/en/)

---

## ?? Support

This actor is maintained by the team at [VerificarEmails.com](https://verificaremails.com).  
Feel free to open an issue or reach out for assistance.
