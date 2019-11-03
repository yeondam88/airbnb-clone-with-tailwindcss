import React from 'react';
import Input from '../Shared/Input';
import Select from '../Shared/Select';

const options = [
  {
    value: 1,
    name: '1 guest'
  },
  {
    value: 2,
    name: '2 guests'
  },
  {
    value: 3,
    name: '3 guests'
  }
];

function FormSection() {
  return (
    <>
      <h3 className="font-bold bold text-2xl mb-4 leading-none">
        Book unique homes and experiences
      </h3>

      <form action="#" className="lg:mb-16 mb-10">
        <div className="flex items-start justify-start flex-wrap">
          <div className="lg:w-1/3 w-full lg:pr-2 mb-4 lg:mb-0">
            <Input
              elemId="where"
              label="Where"
              className="input"
              placeholder="Anywhere"
            />
          </div>
          <div className="lg:w-1/3 w-full lg:px-2 mb-4 lg:mb-0">
            <Input
              elemId="checkin_checkout"
              label="Check-in - Checkout"
              className="input"
              placeholder="mm/dd/yyyy - mm/dd/yyyy"
            />
          </div>
          <div className="lg:w-1/3 w-full lg:pl-2">
            <Select
              elemId="guests"
              label="Guests"
              className="input select"
              options={options}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default FormSection;
