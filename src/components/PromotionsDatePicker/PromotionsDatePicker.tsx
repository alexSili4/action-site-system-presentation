import { FC, useState } from 'react';
import { uk } from 'date-fns/locale';
import { IoCalendarClearOutline, IoClose } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import {
  DatePickerBtn,
  BtnLabel,
  DatePickerContainer,
} from './PromotionsDatePicker.styled';
import { getPromotionsDatePickerBtnLabel, makeBlur } from '@/utils';
import { BtnClickEvent, DatePickerEvent } from '@/types/types';
import { theme } from '@/constants';
import SmoothFadeInDropdownList from '@/components/SmoothFadeInDropdownList';
import DropdownBackdrop from '@/components/DropdownBackdrop';

const PromotionsDatePicker: FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const isSelectedDate = Boolean(date);
  const btnLabel = getPromotionsDatePickerBtnLabel(date);
  const datePickerBtnIcon = date ? (
    <IoClose size={theme.iconSizes.showDatePickerBtn} />
  ) : (
    <FaChevronDown size={theme.iconSizes.showDatePickerBtn} />
  );

  const onDatePickerChange = (e: DatePickerEvent) => {
    toggleShowDatePicker();

    e && setDate(e);
  };

  const toggleShowDatePicker = () => {
    setShowDatePicker((prevState) => !prevState);
  };

  const clearDate = () => {
    setDate(null);
  };

  const onDatePickerBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    if (date) {
      clearDate();
    } else {
      toggleShowDatePicker();
    }
  };

  return (
    <>
      {showDatePicker && <DropdownBackdrop onClick={toggleShowDatePicker} />}
      <DatePickerBtn
        onClick={onDatePickerBtnClick}
        showDatePicker={showDatePicker}
        isSelectedDate={isSelectedDate}
      >
        <IoCalendarClearOutline size={theme.iconSizes.datePickerBtnLabel} />
        <BtnLabel showDatePicker={showDatePicker}>{btnLabel}</BtnLabel>
        {datePickerBtnIcon}
      </DatePickerBtn>
      <SmoothFadeInDropdownList isVisible={showDatePicker}>
        <DatePickerContainer>
          <DatePicker
            selected={date}
            onChange={onDatePickerChange}
            locale={uk}
            inline
          />
        </DatePickerContainer>
      </SmoothFadeInDropdownList>
    </>
  );
};

export default PromotionsDatePicker;
