import { ErrorMessage } from "@hookform/error-message";
import * as React from "react";

import { SimpleErrorMessageProps } from "./SimpleErrorMessage.d";

import styles from "./SimpleErrorMessage.module.scss";

const SimpleErrorMessage: React.FC<SimpleErrorMessageProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click SimpleErrorMessage"),
  errors = null,
  fieldProps = null,
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);
  return (
    <>
      {errors !== null && errors[fieldProps.name] ? (
        <ErrorMessage
          errors={errors}
          name={fieldProps.name}
          render={({ message }) => (
            <span className={styles.formInputMessage}>{message}</span>
          )}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SimpleErrorMessage;
