CREATE TABLE `legislation` (
	`id` integer PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `legislation_version` (
	`id` integer PRIMARY KEY NOT NULL,
	`a_id` integer,
	`should_not_embed_reasons` text NOT NULL
);
