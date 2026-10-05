CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`price` integer NOT NULL,
	`image` text NOT NULL,
	`category` text DEFAULT 'pizza' NOT NULL,
	`is_new` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT '"2026-03-25T15:01:14.732Z"' NOT NULL
);
