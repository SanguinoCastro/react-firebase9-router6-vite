const FormError = ({ error }) => {
  return (
    <>
      {error && (
        <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
          {error.message}
        </p>
      )}
    </>
  );
};

export default FormError;
