--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-06 19:23:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 219 (class 1259 OID 90606)
-- Name: cars; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cars (
    id bigint NOT NULL,
    brand text NOT NULL,
    model text NOT NULL,
    year integer NOT NULL,
    fuel text NOT NULL,
    horsepower integer,
    engine_capacity integer,
    status text NOT NULL,
    price_per_day numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- TOC entry 218 (class 1259 OID 90605)
-- Name: cars_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cars_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4825 (class 0 OID 0)
-- Dependencies: 218
-- Name: cars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;


--
-- TOC entry 221 (class 1259 OID 90616)
-- Name: rentals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.rentals (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    car_id bigint NOT NULL,
    start_date date NOT NULL,
    end_date date,
    total_price numeric(10,2) NOT NULL,
    status text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- TOC entry 220 (class 1259 OID 90615)
-- Name: rentals_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.rentals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4826 (class 0 OID 0)
-- Dependencies: 220
-- Name: rentals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.rentals_id_seq OWNED BY public.rentals.id;


--
-- TOC entry 217 (class 1259 OID 74046)
-- Name: user_sequence; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_sequence
    START WITH 3
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 223 (class 1259 OID 90626)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- TOC entry 222 (class 1259 OID 90625)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4827 (class 0 OID 0)
-- Dependencies: 222
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4652 (class 2604 OID 90609)
-- Name: cars id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);


--
-- TOC entry 4654 (class 2604 OID 90619)
-- Name: rentals id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rentals ALTER COLUMN id SET DEFAULT nextval('public.rentals_id_seq'::regclass);


--
-- TOC entry 4656 (class 2604 OID 90629)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4815 (class 0 OID 90606)
-- Dependencies: 219
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.cars (id, brand, model, year, fuel, horsepower, engine_capacity, status, price_per_day, created_at) FROM stdin;
1	Volkswagen	Golf	2025	GASOLINE	150	1498	AVAILABLE	60.00	2025-05-06 19:23:02.396311
2	Peugeot	208	2021	GASOLINE	102	1199	AVAILABLE	50.00	2025-05-06 19:23:02.396311
3	Volkswagen	Arteon	2021	DIESEL	200	1968	AVAILABLE	90.00	2025-05-06 19:23:02.396311
4	BMW	M4	2023	GASOLINE	510	2993	AVAILABLE	150.00	2025-05-06 19:23:02.396311
\.


--
-- TOC entry 4817 (class 0 OID 90616)
-- Dependencies: 221
-- Data for Name: rentals; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.rentals (id, user_id, car_id, start_date, end_date, total_price, status, created_at) FROM stdin;
\.


--
-- TOC entry 4819 (class 0 OID 90626)
-- Dependencies: 223
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, name, email, password, role, created_at) FROM stdin;
\.


--
-- TOC entry 4828 (class 0 OID 0)
-- Dependencies: 218
-- Name: cars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cars_id_seq', 4, true);


--
-- TOC entry 4829 (class 0 OID 0)
-- Dependencies: 220
-- Name: rentals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.rentals_id_seq', 1, false);


--
-- TOC entry 4830 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_sequence; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_sequence', 9, true);


--
-- TOC entry 4831 (class 0 OID 0)
-- Dependencies: 222
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 4659 (class 2606 OID 90614)
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);


--
-- TOC entry 4661 (class 2606 OID 90624)
-- Name: rentals rentals_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT rentals_pkey PRIMARY KEY (id);


--
-- TOC entry 4663 (class 2606 OID 90636)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4665 (class 2606 OID 90634)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4666 (class 2606 OID 90637)
-- Name: rentals car_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT car_id_fk FOREIGN KEY (car_id) REFERENCES public.cars(id);


--
-- TOC entry 4667 (class 2606 OID 90642)
-- Name: rentals user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rentals
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


-- Completed on 2025-05-06 19:23:55

--
-- PostgreSQL database dump complete
--

