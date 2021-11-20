import React, { useRef } from 'react';
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
  InputWrapperCategory,
  InputValue,
  Label,
  ButtonWrapper,
} from './ExpenseIncomeForm.styled';
import Arrow from './Arrow/Arrow';
import ItemCategory from './ItemCategory/ItemCategory';
import Button from 'components/Buttons/CustomButton';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/operations/transaction-operation';
import Datepicker from 'components/ExpenseIncomeForm/Datepicker/Datepicker';
import { getAllOperationByMonth } from 'redux/operations/transaction-operation';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick ';
import { useMediaQuery } from 'hooks/useMediaQuery';

const ExpenseIncomeForm = ({ list, placeholder, operationType }) => {
  const isMatches = useMediaQuery('(min-width: 768px)');
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const { register, handleSubmit, setValue, control, reset } = useForm();
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const newDate = new Date();
  const handleCategoryClick = e => {
    setValue('category', e.currentTarget.value);
    handleClick();
  };

  const onSubmit = async data => {
    await dispatch(addTransaction({ ...data, operation: operationType }));
    reset();
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    dispatch(getAllOperationByMonth([year, month]));
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
            autocomplete="off"
            {...register('description', { required: true })}
          />
          <InputWrapperCategory>
            <InputСategory
              {...register('category', { required: true })}
              autoComplete="off"
              readOnly
              placeholder={placeholder}
              onClick={handleClick}
            />
            {!isActive ? (
              <Arrow
                onClick={handleClick}
                onFocus={handleClick}
                path={'m1 1 5 4 5-4'}
              />
            ) : (
              <Arrow
                onClick={handleClick}
                onFocus={handleClick}
                path={'m1 6 5-4 5 4'}
              />
            )}
            {isActive && (
              <ListСategory ref={dropdownRef}>
                <ItemCategory onClick={handleCategoryClick} list={list} />
              </ListСategory>
            )}
          </InputWrapperCategory>

          <InputValue
            id="value"
            type="number"
            step="0.1"
            placeholder={isMatches ? '0,00' : '0,00 UAH'}
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
          <Label htmlFor="value">
            <Icon
              name="icon-calculator"
              size="20px"
              viewBox="0 0 20 20"
              color="none"
            />
          </Label>
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button text="Ввод" type="submit" />
        <Button
          type="button"
          i
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
