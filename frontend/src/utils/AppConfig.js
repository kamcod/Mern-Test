const apiUrl = 'http://localhost:5000/app';

const AppConfig = {
    appUrl: 'http://localhost:3000',

    apis: {
        adminLogin: `${apiUrl}/adminLogin`,
        registerUser: `${apiUrl}/register`,
        loginUser: `${apiUrl}/login`,
        logoutUser: `${apiUrl}/logout`,
        getDashboardStats: `${apiUrl}/dashboard`,
        posts: `${apiUrl}/post`,
        payment: `${apiUrl}/payment`,
        subscriptionPayment: `${apiUrl}/subscriptionPayment`
    }
};
export default AppConfig;
