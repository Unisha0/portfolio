export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  let interval = window.setInterval(() => {
    if (percent <= 50) {
      percent += Math.round(Math.random() * 5);
      setLoading(percent);
      return;
    }

    clearInterval(interval);
    interval = window.setInterval(() => {
      percent += Math.round(Math.random());
      setLoading(percent);

      if (percent > 91) {
        clearInterval(interval);
      }
    }, 2000);
  }, 100);

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = window.setInterval(() => {
        if (percent < 100) {
          percent += 1;
          setLoading(percent);
          return;
        }

        resolve(percent);
        clearInterval(interval);
      }, 2);
    });
  }

  return { loaded, percent };
};
