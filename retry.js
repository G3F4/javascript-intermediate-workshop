export default function retry(func, times = 3) {
  if (times > 0) {
    try {
      return func();
    } catch (e) {
      return retry(func, times - 1);
    }
  }

  throw new Error('To many retries');
}