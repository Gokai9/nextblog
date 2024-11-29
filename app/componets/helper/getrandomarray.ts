import { Post } from "@/data/posts";

export function getRandomArray(arr: Array<Post>, randomLength: number) {
    const shuffled = arr.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, randomLength);
  }