const Alert = () => {
  return (
    <div
      className="notifications overflow-hidden pb-2 fixed right-2 top-2 z-50 w-72 md:w-96 flex flex-col gap-2"
      id="notificationsAria"
    ></div>
  );
};

export const createAlert = (messageStatus, messageInfo, navigate = null, dispatch) => {
  const alertAria = document.querySelector("#notificationsAria");
  const alertBody =
    navigate == null
      ? document.createElement("div")
      : document.createElement("a");
  if (navigate != null) {
    alertBody.setAttribute("href", navigate);
  }


  const h5 = document.createElement("h5");
  h5.setAttribute("class", "font-bold");

  const span = document.createElement("span");

  h5.innerHTML =
    messageStatus.toLowerCase() == "error"
      ? document.documentElement.lang == "ar"
        ? "خطأ"
        : "Error"
      : messageStatus.toLowerCase() == "success"
      ? document.documentElement.lang == "ar"
        ? "نجاح"
        : "Success"
      : messageStatus.toLowerCase() == "warning"
      ? document.documentElement.lang == "ar"
        ? "تحذير"
        : "Warning"
      : document.documentElement.lang == "ar"
      ? "اشعار"
      : "Notification";

  span.innerHTML = messageInfo;
  alertBody.appendChild(h5);
  alertBody.appendChild(span);
  alertBody.setAttribute(
    "class",
    "alert translate-x-full duration-1000 flex flex-col flex-start mb-2 z-50"
  );

  // قائمة الألوان المتاحة ومطابقتها بناءً على messageStatus
  const colorMap = {
    Error: "alert-danger",
    Success: "alert-success",
    Info: "alert-info",
    Warning: "alert-warning",
    Dark: "alert-dark",
    Light: "alert-light",
    Primary: "alert-primary",
    Secondary: "alert-secondary",
  };

  const messageStatusClass = colorMap[messageStatus];

  if (messageStatusClass) {
    alertBody.classList.add(messageStatusClass);
  } else {
    alertBody.classList.add("alert-primary");
  }

  // alertAria.appendChild(alertBody);
  alertAria.insertBefore(alertBody, alertAria.firstChild);
  setTimeout(() => {
    alertBody.classList.remove("translate-x-full");
  }, 100);

  alertBody.addEventListener("click", () => {
    alertBody.classList.add("translate-x-full");
    setTimeout(() => {
      alertBody.remove();
    }, 900);
  });

  let time2;
  let time1 = setTimeout(() => {
    alertBody.classList.add("translate-x-full");
    time2 = setTimeout(() => {
      alertBody.remove();
    }, 900);
  }, 5000);

  const clearTimeoutId = () => {
    clearTimeout(time1);
    clearTimeout(time2);
  };

  alertBody.addEventListener("mouseenter", clearTimeoutId);

  alertBody.addEventListener("mouseleave", () => {
    clearTimeoutId();
    time1 = setTimeout(() => {
      alertBody.classList.add("translate-x-full");
      time2 = setTimeout(() => {
        alertBody.remove();
      }, 900);
    }, 5000);
  });
  
};
export default Alert;
