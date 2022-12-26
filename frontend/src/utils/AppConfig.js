const apiUrl = 'http://localhost:5000/app';
export const serverUrl = 'http://localhost:5000';


const AppConfig = {
    appUrl: 'http://localhost:3000',

    apis: {
        adminLogin: `${apiUrl}/admin/login`,
        logoutAdmin: `${apiUrl}/admin/logout`,
        getAllUsers: `${apiUrl}/admin/getAllUsers`,
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
