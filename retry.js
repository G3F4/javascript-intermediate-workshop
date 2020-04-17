export default function retry(func, times = 3) {
  try {
    return func();
  } catch (e) {
    if (times > 0) {
      return retry(func, times - 1);
    }

    throw new Error('To many retries');
  }
}