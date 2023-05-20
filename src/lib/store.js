import {writable} from "svelte/store";

export let reviews = [];
export const reviewsStore = writable(reviews);