import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/operations/transaction-operation';
import Datepicker from 'components/ExpenseIncomeForm/Datepicker';

const ExpenseIncomeForm = ({ list, placeholder }) => {
  const dispatch = useDispatch();
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
    console.log({ ...data, operation: 'expense' });
    dispatch(addTransaction({ ...data, operation: 'expense' }));
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
            <Datepicker selected={value} onChange={setValue} onBlur={onBlur} />
          )}
        />
        <InputWrapper>
          <InputDesc
            id="descriptione"
            placeholder="Описание товара"
            placeholderTextColor="#C7CCDC"
            autocomplete="off"
            {...register('description', { required: true })}
          />
          <InputWrapperCategory>
            <InputСategory
              {...register('category', { required: true })}
              autoComplete="off"
              readOnly
              placeholder={placeholder}
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
                {list.map((item, i) => (
                  <ItemСategory key={i}>
                    <LabelСategory tabIndex={0}>
                      <input
                        onClick={handleCategoryClick}
                        hidden
                        value={item}
                        readOnly
                        type="radio"
                        name="expCategory"
                      />
                      {item}
                    </LabelСategory>
                  </ItemСategory>
                ))}
              </ListСategory>
            )}
          </InputWrapperCategory>

          <InputValue
            id="value"
            type="number"
            step="0.1"
            placeholder="0,00"
            placeholderTextColor="#C7CCDC"
            autocomplete="off"
            {...register(
              'value',
              { required: true },
              {
                pattern: {
                  value: '^[ 0-9]+$',
                },
                min: 0.01,
              },
            )}
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
          type="button"
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
