import React, { useState } from 'react';
import { db } from '../../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const Employess = () => {
    const [email, setEmail] = useState('');

    const handleCheckEmail = async (e) => {
        e.preventDefault();

        // Crear una referencia a la colección
        const employeesEmailCollection = collection(db, 'employees_email');
        
        // Crear una consulta para buscar documentos que tengan el email
        const q = query(employeesEmailCollection, where("email", "==", email));
        
        const querySnapshot = await getDocs(q);
        let foundEmployee = null;
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        foundEmployee = doc.data();
        });

        if (foundEmployee) {
        // El correo electrónico se encontró. Ahora puedes comprobar el campo "questionnaire" si lo necesitas.
        if (foundEmployee.questionnaire) {
            alert('Ya has completado el cuestionario.');
        } else {
            alert('Puedes proceder con el cuestionario.');
            // Aquí puedes redirigir al formulario o cambiar el estado del componente de acuerdo a tus necesidades
        }
        } else {
        alert('Email no registrado.');
        }
    };

    return (
        <form onSubmit={handleCheckEmail}>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit">Verificar email</button>
        </form>
    );
};