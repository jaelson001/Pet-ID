# Pet Registration App

This project is a simple web application for registering pets. It consists of two main screens: a registration form and a results display that includes a QR code.

## Project Structure

```
pet-registration-app
├── src
│   ├── index.html        # HTML structure for the pet registration form
│   ├── result.html       # Displays the registered pet and owner information
│   ├── styles
│   │   └── style.css     # CSS styles for the application
│   ├── scripts
│   │   ├── form.js       # Handles form submission and redirects to result page
│   │   └── qr-code.js    # Generates a QR code based on the registered data
├── README.md             # Project documentation
```

## Features

- **Pet Registration Form**: Users can enter the pet's name, owner's name, and owner's WhatsApp number.
- **Results Display**: After submission, the application retrieves the data from the URL and displays it.
- **QR Code Generation**: A QR code is generated based on the registered information, which can be printed.

## Getting Started

1. Clone the repository to your local machine.
2. Open the `src/index.html` file in a web browser to access the pet registration form.
3. Fill in the required fields and submit the form.
4. You will be redirected to the results page where you can see the entered information and the generated QR code.

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is open-source and available under the MIT License.