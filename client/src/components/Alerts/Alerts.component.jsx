const Alerts = () => {
  const alerts = (toast, severity, summary, detail) => {
    toast.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
      closable: true,
      life: 3500,
    });
  };

  return { alerts };
};

export default Alerts;
