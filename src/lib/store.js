import {writable} from "svelte/store";

export const reviews = writable([]),
     isModalOpen = writable(false),
     reviewList = writable([]);