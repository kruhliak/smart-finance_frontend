import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Icon } from 'hooks/Icon';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  Wrapper,
  InputWrapper,
  InputDesc,
  InputСategory,
  ListСategory,
  ItemСategory,
  LabelСategory,
  InputWrapperCategory,
  InputValue,
  MyIcon,
  ButtonWrapper,
  Arrow,
} from './ExpenseIncomeForm.styled';
import Button from 'components/Buttons/CustomButton';
import './Datepicker.css';

const expenseList = [
  'Транспорт',
  'Продукты',
  'Здоровье',
  'Алкоголь',
  'Развлечения',
  'Всё для дома',
  'Техника',
  'Коммуналка, связь',
  'Спорт, хобби',
  'Образование',
  'Прочее',
];

// const incomeList = ['ЗП', 'Доп. доход'];

const ExpenseIncomeForm = () => {
  const [isCategories, setIsCategories] = useState(false);
  const { register, handleSubmit, setValue, control, reset } = useForm();
  const handleClick = () => {
    setIsCategories(!isCategories);
  };

  const newDate = new Date();

  const handleCategoryClick = e => {
    setValue('category', e.currentTarget.value);
    handleClick();
  };

  const onSubmit = data => {
    console.log(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Controller
          control={control}
          name="date"
          defaultValue={newDate}
          render={({ field: { value, onBlur, ref } }) => (
            <DatePicker
              dateFormat="dd.MM.yyyy"
              onChange={date => setValue('date', date)}
              onBlur={onBlur}
              selected={value}
            />
          )}
        />
        <InputWrapper>
          <InputDesc
            id="descriptione"
            placeholder="Описание товара"
            placeholderTextColor="#C7CCDC"
            {...register('descriptione')}
          />
          <InputWrapperCategory>
            <InputСategory
              {...register('category')}
              autoComplete="off"
              readOnly
              placeholder="Категория товара"
              placeholderTextColor="#C7CCDC"
              onClick={handleClick}
            />
            {!isCategories ? (
              <Arrow
                width="12"
                height="7"
                fill="none"
                onClick={handleClick}
                onFocus={handleClick}
              >
                <path d="m1 1 5 4 5-4" stroke="#C7CCDC" strokeWidth="2" />
              </Arrow>
            ) : (
              <Arrow
                width="12"
                height="7"
                fill="none"
                onClick={handleClick}
                onFocus={handleClick}
              >
                <path d="m1 6 5-4 5 4" stroke="#C7CCDC" strokeWidth="2" />
              </Arrow>
            )}
            {isCategories && (
              <ListСategory>
                {expenseList.map((expense, i) => (
                  <ItemСategory key={i}>
                    <LabelСategory tabIndex={0}>
                      <input
                        onClick={handleCategoryClick}
                        hidden
                        value={expense}
                        readOnly
                        type="radio"
                        name="expCategory"
                      />
                      {expense}
                    </LabelСategory>
                  </ItemСategory>
                ))}
              </ListСategory>
            )}
          </InputWrapperCategory>

          <InputValue
            id="value"
            placeholder="0,00"
            placeholderTextColor="#C7CCDC"
            {...register('value', { min: 0 })}
          />
          <MyIcon>
            <Icon
              name="icon-calculator"
              size="20px"
              viewBox="0 0 20 20"
              color="none"
            />
          </MyIcon>
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button text="Ввод" type="submit" />
        <Button
          text="Очистить"
          onClick={() => {
            reset({
              date: newDate,
              descriptione: '',
              category: '',
              value: '',
            });
          }}
          backBtn
        />
      </ButtonWrapper>
    </Form>
  );
};

export default ExpenseIncomeForm;
