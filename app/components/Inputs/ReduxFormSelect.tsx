import { map } from 'lodash';
import React from 'react';
import { FormGroup, Label } from 'reactstrap';

const ReduxFormSelect: React.FC = (field: any) => (
  <FormGroup row={true}>
    <Label>{field.label}</Label>
    <select {...field.input} disabled={field.disabled} className="form-control">
      <option value="" disabled={true}>
        {field.placeHolder}
      </option>
      {map(field.values, (value: any, i: number) => {

        if(typeof value === 'string') {
          return (
            <option key={i} value={value}>
              {value}
            </option>
          );
        } else {
          return (
            <option key={i} value={value.value}>
              {value.label}
            </option>
          );
        }
        
      })}
    </select>
    {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
  </FormGroup>
);

export default ReduxFormSelect;