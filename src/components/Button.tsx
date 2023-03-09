import React, { useCallback } from "react";
import classNames from "classnames";

type Props = {
  title: string;
  onClick?: () => void;
  long?: boolean;
};

export const Button: React.FC<Props> = props => {
  const { title, onClick, long } = props;
  const disabled = !onClick;

  const onClickHandler = useCallback(
    (e: React.SyntheticEvent) => {
      if (!onClick) return;

      e.preventDefault();
      // give the animation time to play
      setTimeout(() => onClick(), 100);
    },
    [onClick]
  );

  return (
    <button
      className={classNames(
        "bg-yellow border-2 border-black rounded-lg lg:rounded-2xl text-black font-semibold px-6 lg:px-8 py-1 lg:py-4 small-shadow transition-transform duration-100 enabled:active:scale-[1.1] lg:text-3xl lg:enabled:hover:scale-[1.1]",
        {
          "lg:!px-32": !!long
        }
      )}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};
