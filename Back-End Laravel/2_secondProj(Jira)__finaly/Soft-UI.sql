-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Жов 07 2023 р., 22:58
-- Версія сервера: 8.0.30
-- Версія PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `Soft-UI`
--

-- --------------------------------------------------------

--
-- Структура таблиці `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `description` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `task_id` int NOT NULL,
  `created_at` timestamp(1) NOT NULL DEFAULT CURRENT_TIMESTAMP(1),
  `updated_at` timestamp(1) NOT NULL DEFAULT CURRENT_TIMESTAMP(1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `comments`
--

INSERT INTO `comments` (`id`, `description`, `user_id`, `task_id`, `created_at`, `updated_at`) VALUES
(15, 'Якогось хуя видилились всі коментарі', 1, 1, '2023-10-06 18:57:12.0', '2023-10-06 18:57:12.0'),
(17, 'Наробимо якихось коментарів 33584', 1, 2, '2023-10-06 19:03:29.0', '2023-10-06 20:14:34.0'),
(20, 'Наробимо якихось коментарів 5', 1, 7, '2023-10-06 19:04:09.0', '2023-10-06 19:04:09.0'),
(21, 'Наробимо якихось коментарів 5ваі', 1, 8, '2023-10-06 19:04:27.0', '2023-10-06 19:04:27.0'),
(22, 'Якогось хуя видилились всі коментарі', 1, 11, '2023-10-06 20:15:40.0', '2023-10-06 20:15:40.0'),
(24, 'dsgdsf sdgdf gsdfg sfd', 1, 10, '2023-10-06 20:16:07.0', '2023-10-06 20:16:07.0'),
(25, 'f dfgfdgdf fdb fdgb fd bfgbfg', 1, 11, '2023-10-06 20:16:22.0', '2023-10-06 20:16:22.0');

-- --------------------------------------------------------

--
-- Структура таблиці `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Структура таблиці `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `projects`
--

CREATE TABLE `projects` (
  `id` int NOT NULL,
  `name` varchar(225) NOT NULL,
  `description` varchar(500) NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Jira', 'Робимо доки не впадем, а зп на пенсії потратим)', 1, '2023-07-03 10:20:04', '2023-07-03 10:20:04'),
(2, 'TestProj_vjpdvp;fd', 'TestProj Postman sdsd', 1, '2023-07-03 10:22:16', '2023-07-05 06:53:48'),
(3, 'OpenCard', 'ХЗ шо тут буде, скоро розкажуть', 1, '2023-07-03 10:22:16', '2023-07-03 10:22:16');

-- --------------------------------------------------------

--
-- Структура таблиці `project_comment`
--

CREATE TABLE `project_comment` (
  `id` int NOT NULL,
  `project_id` int NOT NULL,
  `comment_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `project_task`
--

CREATE TABLE `project_task` (
  `id` int NOT NULL,
  `project_id` int NOT NULL,
  `task_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `project_task`
--

INSERT INTO `project_task` (`id`, `project_id`, `task_id`, `created_at`, `updated_at`) VALUES
(1, 2, 9, '2023-07-03 10:25:53', '2023-07-03 10:25:53'),
(2, 2, 10, '2023-07-03 10:25:53', '2023-07-03 10:25:53'),
(3, 2, 2, '2023-07-03 10:25:53', '2023-07-03 10:25:53'),
(4, 3, 7, '2023-07-03 10:25:53', '2023-07-03 10:25:53'),
(5, 1, 1, '2023-07-03 10:25:53', '2023-07-03 10:25:53'),
(6, 3, 1, '2023-07-03 10:25:53', '2023-07-03 10:25:53');

-- --------------------------------------------------------

--
-- Структура таблиці `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(225) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `roles`
--

INSERT INTO `roles` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'admin', 1, '2023-06-17 14:37:29', '2023-06-17 14:37:29'),
(2, 'teemLead', 1, '2023-06-17 14:37:29', '2023-06-17 14:37:29'),
(3, 'user', 1, '2023-06-25 15:50:04', '2023-06-25 15:50:04'),
(4, 'noRole', 1, '2023-06-27 13:31:27', '2023-06-27 13:31:27');

-- --------------------------------------------------------

--
-- Структура таблиці `roles_users`
--

CREATE TABLE `roles_users` (
  `id` int NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `role_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `roles_users`
--

INSERT INTO `roles_users` (`id`, `user_id`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2023-06-17 13:41:10', '2023-07-02 12:00:12'),
(2, 2, 2, '2023-06-22 13:43:29', '2023-06-22 13:43:29'),
(3, 3, 3, '2023-06-27 13:32:52', '2023-06-28 06:24:39'),
(4, 4, 3, '2023-06-27 14:10:58', '2023-06-28 06:25:04'),
(5, 5, 4, '2023-06-27 19:15:15', '2023-07-02 12:32:29'),
(6, 6, 2, '2023-06-27 19:05:58', '2023-07-02 11:55:10'),
(7, 7, 2, '2023-06-27 19:17:49', '2023-07-03 16:01:48'),
(8, 8, 2, '2023-06-27 19:41:32', '2023-07-02 12:02:19'),
(9, 9, 3, '2023-06-27 19:50:20', '2023-07-02 11:55:33');

-- --------------------------------------------------------

--
-- Структура таблиці `status`
--

CREATE TABLE `status` (
  `id` int NOT NULL,
  `name` varchar(225) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `status`
--

INSERT INTO `status` (`id`, `name`, `is_active`, `created_at`, `updated_at`) VALUES
(2, 'До виконання', 1, '2023-06-12 03:16:22', '2023-06-12 03:16:22'),
(3, 'В роботі', 1, '2023-06-12 03:16:36', '2023-06-12 03:16:36'),
(7, 'Тестовий таск', 1, '2023-06-14 22:28:11', '2023-06-14 22:28:11'),
(8, 'Готово', 1, '2023-08-21 20:27:39', '2023-08-21 20:27:39');

-- --------------------------------------------------------

--
-- Структура таблиці `tasks`
--

CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `name` varchar(225) NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `user_id`, `status_id`, `created_at`, `updated_at`) VALUES
(1, 'Прийми те що ти нічого не знаєш, просто пробуй...2#548', 1, 8, '2023-06-10 20:07:14', '2023-10-06 06:45:03'),
(2, 'Перечитати ТЗ і перехреститись', 2, 2, '2023-06-10 21:48:47', '2023-06-27 15:38:40'),
(7, 'Тестовий таск', 1, 3, '2023-06-22 12:46:37', '2023-06-22 12:46:37'),
(8, 'Тестовий таск', 1, 3, '2023-06-22 12:47:39', '2023-06-22 12:47:39'),
(9, 'Some title', 1, 3, '2023-06-23 03:33:54', '2023-06-23 03:33:54'),
(10, 'Some title', 2, 3, '2023-06-23 03:36:18', '2023-06-23 03:36:18'),
(11, 'Таск який не такс', 3, 3, '2023-08-19 18:09:59', '2023-08-19 18:09:59'),
(12, 'Таск який не такс 2', 7, 3, '2023-08-19 18:09:59', '2023-08-19 18:09:59'),
(14, 'Аля такск не таск 3', 2, 2, '2023-08-19 18:14:23', '2023-08-19 18:14:23'),
(15, 'Аля такск не таск 4', 5, 7, '2023-08-19 18:14:23', '2023-08-19 18:14:23'),
(16, 'Аля такск не таск 5 56562,55106515032016510520', 1, 3, '2023-08-19 18:14:23', '2023-10-05 04:51:02'),
(19, 'Аля такск не таск 8', 3, 2, '2023-08-19 18:14:23', '2023-08-19 18:14:23'),
(21, 'Тестовий таск із Фронту №2', 1, 2, '2023-10-04 10:57:19', '2023-10-04 10:57:19'),
(23, 'Таск: Не валять дурака', 1, 3, '2023-10-04 13:37:13', '2023-10-04 13:37:13'),
(28, 'Такс блять, заліз, називається, в БД', 1, 8, '2023-10-06 15:42:43', '2023-10-06 15:42:43'),
(29, 'Таск хуяск', 1, 8, '2023-10-06 17:46:54', '2023-10-06 17:46:54');

-- --------------------------------------------------------

--
-- Структура таблиці `task_user`
--

CREATE TABLE `task_user` (
  `id` int NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `task_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `task_user`
--

INSERT INTO `task_user` (`id`, `user_id`, `task_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 3, 7, '2023-07-02 19:54:38', '2023-07-02 19:54:38'),
(20, 7, 9, '2023-07-02 20:01:52', '2023-07-02 20:01:52'),
(21, 9, 8, '2023-07-03 19:02:16', '2023-07-03 19:02:16'),
(22, 3, 11, '2023-10-01 07:52:35', '2023-10-01 07:52:35'),
(25, 1, 12, '2023-10-01 07:52:42', '2023-10-01 07:52:42'),
(27, 4, 14, '2023-10-01 07:52:48', '2023-10-01 07:52:48'),
(29, 3, 15, '2023-10-01 07:53:03', '2023-10-01 07:53:03'),
(31, 1, 16, '2023-10-01 07:53:09', '2023-10-01 07:53:09'),
(35, 1, 19, '2023-10-01 07:53:23', '2023-10-01 07:53:23'),
(41, 5, 10, '2023-10-01 12:31:48', '2023-10-01 12:31:48'),
(44, 4, 2, '2023-10-02 15:53:35', '2023-10-02 15:53:35'),
(83, 6, 14, '2023-10-03 03:36:03', '2023-10-03 03:36:03'),
(86, 8, 16, '2023-10-03 04:11:50', '2023-10-03 04:11:50'),
(87, 6, 16, '2023-10-03 04:11:51', '2023-10-03 04:11:51'),
(89, 5, 12, '2023-10-03 04:16:56', '2023-10-03 04:16:56'),
(91, 3, 8, '2023-10-03 05:37:26', '2023-10-03 05:37:26'),
(93, 3, 9, '2023-10-03 05:39:56', '2023-10-03 05:39:56'),
(96, 8, 15, '2023-10-03 05:47:28', '2023-10-03 05:47:28'),
(106, 8, 29, '2023-10-06 17:47:23', '2023-10-06 17:47:23'),
(108, 4, 29, '2023-10-06 17:47:23', '2023-10-06 17:47:23');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` bigint DEFAULT NULL,
  `user_avatar` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_me` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `user_avatar`, `location`, `about_me`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'admin@softui.com', '$2y$10$JobUw/Ew7QmGTNtjV9nXteDID5FU8H9jB0O45whkFCbDaP6oFptNa', NULL, '64e464b832767_3SCv.gif', NULL, NULL, NULL, '2023-06-05 14:31:00', '2023-08-22 04:33:12'),
(2, 'Red_Button_01', 'robota.s76205@gmail.com', '$2y$10$fdDlb.0FPJpOjmeG6E2XBuaAVMHWTe0XkzQNEYblow9iMP.8msdha', NULL, '64e46c3d3e7e7_73ecfebda2fcc1d4d3eef60d6c6efacd.jpg', NULL, NULL, NULL, '2023-06-22 10:41:29', '2023-08-22 05:05:17'),
(3, 'Name', 'rob@gmail.com', '$2y$10$hP0bblmN/d/I4iTyRNkjguFzTg5McD.VDqDF4.BumWvCTap3/2Txy', NULL, '64e46c47e6f68_1681634802_kartinki-pibig-info-p-kartinka-timona-iz-multika-arti-krasivo-3.jpg', NULL, NULL, NULL, '2023-06-25 12:03:45', '2023-08-22 05:05:27'),
(4, 'Kraken', 'sdfsdfsdvsfds.s7dfsdfsdf6205@gmail.com', '$2y$10$wU7iGTY4Bj.e28MTSyqW9uPa0PTviRpUto2742GAviwKxVLufIba2', NULL, '64e46c5478adf_images (1).jpg', NULL, NULL, NULL, '2023-06-27 11:10:05', '2023-08-22 05:05:40'),
(5, 'TestPers', 'sfsvsda@gmail.com', '$2y$10$1/zB2rIXXWmtpuFpL8gKyOycOgorXkR0TDC/JJzDadkRTEcBFcL3G', NULL, '64e46c6356a2e_images (2).jpg', NULL, NULL, NULL, '2023-06-27 15:55:52', '2023-08-22 05:05:55'),
(6, 'TestPers2', 'sfsfsdfsda@gmail.com', '$2y$10$WDWjSkylZ8JEZb8MTTFqi.LyLSUlu8qq76XPWYjfs8nTsX/c5rf6a', NULL, '64e46c6f8eba1_images (3).jpg', NULL, NULL, NULL, '2023-06-27 16:05:58', '2023-08-22 05:06:07'),
(7, 'Ручка', 'robsfdsxfsta.s76fdsfgdsr205@gmail.com', '$2y$10$tgAnKKCHX4OWdAD0V/56w.afQ0z.iDZ7/RMjF5b6ISOxRwZm.Zcry', NULL, '64e46c7e317d2_images.jpg', NULL, NULL, NULL, '2023-06-27 16:17:49', '2023-08-22 05:06:22'),
(8, 'SomeName', 'robotasfva.sdcsdf76dsf0vdfv5@gmail.com', '$2y$10$3sTjT2UT5eQobJrVIag6Su8lKp5azXKecoBcKWa/.yfxPbgizb9UW', NULL, '64e46c8c64ac2_PES.png', NULL, NULL, NULL, '2023-06-27 16:41:32', '2023-08-22 05:06:36'),
(9, 'Roman', 'Kdfddfsudfsdfss_xf49@student.itstep.org', 'b5df36ac79aa6391ffb432b9e5ad7880', NULL, '64e46c99a805c_завантаження.jpg', NULL, NULL, NULL, '2023-06-27 16:50:20', '2023-08-22 05:06:49');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `task_id` (`task_id`);

--
-- Індекси таблиці `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Індекси таблиці `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Індекси таблиці `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Індекси таблиці `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Індекси таблиці `project_comment`
--
ALTER TABLE `project_comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `project_comment_ibfk_2` (`comment_id`);

--
-- Індекси таблиці `project_task`
--
ALTER TABLE `project_task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `project_task_ibfk_2` (`task_id`);

--
-- Індекси таблиці `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `roles_users`
--
ALTER TABLE `roles_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Індекси таблиці `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Індекси таблиці `task_user`
--
ALTER TABLE `task_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_user_ibfk_1` (`task_id`),
  ADD KEY `task_user_ibfk_2` (`user_id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблиці `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблиці `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблиці `project_comment`
--
ALTER TABLE `project_comment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблиці `project_task`
--
ALTER TABLE `project_task`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблиці `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблиці `roles_users`
--
ALTER TABLE `roles_users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблиці `status`
--
ALTER TABLE `status`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблиці `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT для таблиці `task_user`
--
ALTER TABLE `task_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `project_comment`
--
ALTER TABLE `project_comment`
  ADD CONSTRAINT `project_comment_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_comment_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `project_task`
--
ALTER TABLE `project_task`
  ADD CONSTRAINT `project_task_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_task_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `roles_users`
--
ALTER TABLE `roles_users`
  ADD CONSTRAINT `roles_users_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `roles_users_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Обмеження зовнішнього ключа таблиці `task_user`
--
ALTER TABLE `task_user`
  ADD CONSTRAINT `task_user_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `task_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
