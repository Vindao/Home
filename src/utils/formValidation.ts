const langs = ['en', 'de', 'nl'];

export default (type: string, val: string, val2: string | null = null): string[] => {
  let errors = [];
  switch (type) {
    case 'name':
      if (val.length < 1) {
        errors.push('REQUIRED');
      }
      if (val.length > 10) {
        errors.push('TOOLONG');
      }
      break;
    case 'email':
      if (
        !val.match(
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        )
      ) {
        errors.push('INVALID');
      }
      break;
    case 'company':
      // if (!val.match(/^\S+$/) && val.length !== 0) {
      //   errors.push('NOSPACES');
      // }
      if (val.length > 10) {
        errors.push('TOOLONG');
      }
      break;
    case 'phone':
      if (!val.match(/(^$|^([+]?[0-9][\s]?){5,}\w+)/)) {
        errors.push('INVALID');
      }

      break;
    case 'password':
      const tests = {
        LOWER: /^(?=.*[a-z])/,
        UPPER: /^(?=.*[A-Z])/,
        NUMBER: /^(?=.*[0-9])/,
        MINCHAR: /(?=.{8,})/,
      };

      for (const test in tests) {
        //@ts-ignore
        if (!val.match(tests[test])) {
          errors.push(test);
        }
      }

      break;
    case 'confPassword':
      if (val !== val2) {
        errors.push('INVALID');
      }

      break;
  }
  return errors;
};
