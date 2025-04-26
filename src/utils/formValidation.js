export const validateFields = (formData) => {
    const errors = {};
  
    const nameRegex = /^[А-Яа-яA-Za-z\s]{2,30}$/;
    const phoneRegex = /^\+375(44|29|33)\d{7}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const specialCharPattern = /[&$#_<>/%^*!@+=]/;
  
    if (!nameRegex.test(formData.name.trim())) {
      errors.name = "Введите корректное имя (только слово)";
    }
  
    if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Введите телефон в формате +375(ХХ)XXXXXXX";
    }
  
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Введите корректный email";
    }
  
    if (!formData.interest) {
      errors.interest = "Выберите интересующий вас вариант";
    }
  
    if (formData.interest === 'home') {
        if (!formData.homeArea) errors.homeArea = 'Введите площадь дома (м²)(только цифры!)';
        if (!formData.homePlants.trim()) {
          errors.homePlants = 'Введите растения';
        } else if (specialCharPattern.test(formData.homePlants)) {
          errors.homePlants = 'Не используйте специальные символы';
        }
      }
  
    if (formData.interest === 'office') {
    if (!formData.officeDesks) errors.officeDesks = 'Введите кол-во мест';
    if (!formData.officeType.trim()) {
        errors.officeType = 'Уточните тип помещения';
    } else if (specialCharPattern.test(formData.officeType)) {
        errors.officeType = 'Не используйте специальные символы';
    }
    }
    
    if (formData.interest === 'garden') {
    if (!formData.gardenSize) errors.gardenSize = 'Введите размер сада (м²)(только цифры!)';
    if (!formData.gardenStyle.trim()) {
        errors.gardenStyle = 'Уточните стиль сада';
    } else if (specialCharPattern.test(formData.gardenStyle)) {
        errors.gardenStyle = 'Не используйте специальные символы';
    }
    }
  
    if (!formData.agreed) {
      errors.agreed = "Подтвердите согласие на обработку данных";
    }
  
    return errors;
  };
  