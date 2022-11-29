// Exporting module
console.log('Exporting module');

export async function getUserData(url) {
  try {
    const token = localStorage.getItem('token');

    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const userData = await response.json();

    console.log(userData);

    // Catch error //
  } catch (error) {
    alert(error);
  }
}
