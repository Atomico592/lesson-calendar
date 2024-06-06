import React, {useState} from 'react';
import CustomInput from "../CustomInput/CustomInput.tsx";
import Logo from "../../Logo/Logo.tsx";
import Button from "../../Button/Button.tsx";
import "./Form.scss"

interface FormComponent {
    email: string;
    password: string;
    checkbox: boolean;
}

interface Props {
    title: string;
}

const Form: React.FC<Props> = ({title}) => {
    const [formState, setFormState] = useState<FormComponent>({email: "", password: "", checkbox: false})
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormState(prev => ({...prev, [name]: value}));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;
        setFormState(prev => ({...prev, [name]: checked}));
    };
    console.log(formState)
    return (
        <div className="form-wrapper">
            <div className="form">
                <div className="form__logo">
                    <Logo/>
                </div>
                <h2 className="form__title">{title}</h2>

                <div>

                    <div className="form__input-block">
                        <CustomInput
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            value={formState.email}
                            required={true}
                            onChange={inputChangeHandler}
                        />
                        <CustomInput
                            type="text"
                            name="password"
                            placeholder="Пароль"
                            value={formState.password}
                            required={true}
                            onChange={inputChangeHandler}
                        />
                        <label className="form__input-block-label">
                            <input
                                type="checkbox"
                                name="checkbox"
                                className="form__checkbox-input"
                                onChange={handleCheckboxChange}
                                checked={formState.checkbox}/>
                            Запомнить меня
                        </label>
                    </div>
                    <div className="form__btn-links-block">
                        <div className="form__btn-wrapper">
                            <Button title="Войти"></Button>
                        </div>
                        <div className="form__links">
                            <span className="form__links-styles">Я забыл пароль</span>
                            <span className="form__links-styles">Войти как тренер</span>
                        </div>
                    </div>

                    <div className="form__under-links">
                        <p className="form__links-no-acc">Нет аккаунта?</p>
                        <span className="form__links-styles">Зарегистрироваться</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form;