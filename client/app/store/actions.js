const closeDialogOptions = {
  content: '',
  url: '/',
  title: 'Terminplaner',
}

export const check_credentials = (credentials) => ({
  type: 'CHECK_CREDENTIALS',
  credentials
});

export const logout = (credentials) => ({
  type: 'LOGOUT',
});

// general dialog

export const close_dialog = id => ({
  type: 'DIALOG',
  ...closeDialogOptions,
});

// appointments
export const new_appointment_dialog = () => ({
  type: 'DIALOG',
  content: 'NEW_APPOINTMENT',
  url: '/termin',
  title: 'Terminplaner - Termin erstellen',
  config: true,
})