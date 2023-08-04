import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MathValidators {
    static addition(target: string, sourceOne: string, sourceTwo: string): ValidatorFn {
      return (form: AbstractControl): ValidationErrors | null => {
        const targetValue = form.get(target)?.value;
        const sourceOneValue = form.get(sourceOne)?.value;
        const sourceTwoValue = form.get(sourceTwo)?.value;
  
        if (sourceOneValue + sourceTwoValue === parseInt(targetValue)) {
          return null; // Validation passed
        }
  
        return { incorrectSum: true }; // Validation failed, return an error object
      };
    }
  }
  
