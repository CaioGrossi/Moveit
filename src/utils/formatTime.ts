export default function formatTime(time: number) {
  return String(time).padStart(2, "0").split("");
}
