import { useState, useEffect, useCallback } from 'react';
import connectionApi from '../../api/connectionApi';
import { AuthContext } from './AuthContext';
// import { mutate } from 'swr';


//status: 'checking' | 'authenticated' | 'not_authenticated';

const AUTH_INITIAL_STATE = {
    status: 'checking',
    logged: false,
    token: null,
    usuario: null,
    errorMessage: '',
}

export const AuthProvider = ({ children }) => {


    const [state, setState] = useState(AUTH_INITIAL_STATE);

    // useEffect(() => {
    //     checkToken();
    // }, [])

  
    // const checkToken = useCallback(async () => {
    //     const token = localStorage.getItem('token');
    //     // Si no existe el token
    //     if (!token) {
    //         return setState({
    //             ...state,
    //             status: 'not_authenticated',
    //             token: null,
    //             usuario: null,
    //             logged: false,
    //         });

    //     }
    //     try {
    //         // Si existe el token
    //         const resp = await connectionApi.get('/auth/check');
    //         if (resp.status !== 200) {
    //             // console.log('not status 200')
    //             return setState({
    //                 ...state,
    //                 status: 'not_authenticated',
    //                 token: null,
    //                 usuario: null,
    //                 logged: false,
    //             });
    //         }
    //         localStorage.setItem('token', resp.data.token);
    //         return setState({
    //             ...state,
    //             token: resp.data.token,
    //             usuario: resp.data.user,
    //             logged: true,
    //             status: 'authenticated',
    //             errorMessage: '',
    //         })

    //     } catch (error) {
    //         // console.log(error);
    //         localStorage.removeItem('token')
    //         return setState({
    //             ...state,
    //             status: 'not_authenticated',
    //             token: null,
    //             usuario: null,
    //             logged: false,
    //         });
    //     }
    // })

    const singIn = async ({ email, password }) => {
        try {
            const { data } = await connectionApi.post('/auth/login', { email, password });
            setState({
                ...state,
                token: data.token,
                usuario: data.user,
                logged: true,
                status: 'authenticated',
                errorMessage: '',
            })

            // localStorage.setItem('token', data.token);

            return true;

        } catch (error) {
            const { data } = error.response
            setState({
                ...state,
                errorMessage: data.error
            })

            return false;

        }
    }

    const logout = () => {
        // localStorage.removeItem('token');
        setState({
            ...state,
            status: 'not_authenticated',
            token: null,
            usuario: null,
            logged: false,
        });
    }

    const deleteUser = async (id) => {
        try {
            const { data } = await connectionApi.delete(`/auth/${id}`);

            // await mutate([`http://localhost:8000/api/auth?limit=5&page=1`, state.token]);

        } catch (error) {
            console.log(error);
        }

    }

    const createUser = async (...rest) => {
        try {
            const { nombre, apellido, email, telefono } = rest[0];
            const { data } = await connectionApi.post('/auth/register', { nombre, apellido, email, telefono, password: '123456' });
            // await mutate([`http://localhost:8000/api/auth?limit=5&page=1`, state.token]);


        } catch (error) {

        }
    }

    // const deleteMicro = async (id) => { //TODO: futuro context
    //     try {
    //         const { data } = await connectionApi.delete(`/micro/${id}`);

    //         await mutate([`http://localhost:8000/api/micro`, state.token]);

    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

    // const createMicro = async (...rest) => { //TODO: futuro context
    //     try {
    //         const { patente, marca, modelo, empresa } = rest[0];
    //         const { data } = await connectionApi.post('/micro', { patente, marca, modelo, empresaId: empresa });
    //         await mutate([`http://localhost:8000/api/micro`, state.token]);
    //         // console.log(data);

    //     } catch (error) {

    //     }
    // }

    // const insertRuta = async (dataRuta) => {
    //     try {
    //         const {
    //             nombreRuta,
    //             tiempoViaje,
    //             horaInicio,
    //             terminalInicio,
    //             horaTermino,
    //             terminalTermino
    //         } = dataRuta;

    //         const { data } = await connectionApi.post('/ruta', {
    //             nombreRuta,
    //             tiempoViaje,
    //             horaInicio,
    //             terminalInicio,
    //             horaTermino,
    //             terminalTermino
    //         });
    //         console.log(data);

    //         await mutate([`http://localhost:8000/api/ruta`, state.token]);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <AuthContext.Provider value={{
            ...state,

            singIn,
            logout,
            deleteUser,
            createUser,
            // deleteMicro,
            // createMicro,
            // insertRuta,
        }}>
            {children}
        </AuthContext.Provider>
    )
};