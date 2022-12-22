const apiUrl = 'http://localhost:5000/app';

const AppConfig = {
    appUrl: 'http://localhost:3000',

    apis: {
        getDashboardStats: `${apiUrl}/dashboard`,
        registerUser: `${apiUrl}/register`,
        loginUser: `${apiUrl}/login`,
        logoutUser: `${apiUrl}/logout`,
        payment: `${apiUrl}/payment`
    }
};
export default AppConfig;
