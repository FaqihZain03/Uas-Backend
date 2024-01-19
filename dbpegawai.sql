-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2024 pada 07.08
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbpegawai`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` char(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `status` enum('Active','InActive','Terminated','') NOT NULL,
  `hired_on` date NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `employee`
--

INSERT INTO `employee` (`id`, `name`, `gender`, `phone`, `address`, `email`, `status`, `hired_on`, `Timestamp`) VALUES
(0, 'Steven', 'Laki-Laki', '0881234567', 'jl.yang bener aja rt 01 rw 02 kel rugi dong', 'steventamvan@yahoo.com', 'Active', '2024-01-01', '2024-01-19 06:04:12'),
(0, 'wati', 'Perempuan', '0899876543', 'jl.gatau males rt 09 rw 08 kel.aa kasian aa', 'watiwati@gmail.com', 'InActive', '2024-01-02', '2024-01-19 06:06:18'),
(0, 'Asep Syamsul Jamaludin', 'Laki-Laki', '098777666543', 'gg.ihirrrr rt 12 rw 13 kel. gocap', 'ihirrr@gmail.com', 'Terminated', '2024-01-03', '2024-01-19 06:07:32');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
