import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
	Collapse,
	Container,
	Nav,
	Navbar,
	NavDropdown,
	Offcanvas,
} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import Logo from '../assets/images/uap-logo-white.svg';
// import './Navbar.css';

const Navigation = () => {
	// sideNav
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [open, setOpen] = useState(false);

	const menuItems = [
		{
			key: '100',
			menu: 'Home',
			submenu: [],
			link: '/',
		},
		{
			key: '200',
			menu: 'Admission',
			submenu: [
				{
					key: '201',
					name: 'Admission info',
					link: 'https://cse.uap-bd.edu/graduate/',
				},
				{
					key: '202',
					name: 'Tuition fees',
					link: 'https://cse.uap-bd.edu/tuition_fee/',
				},
				{
					key: '202',
					name: 'Admission result',
					link: 'https://cse.uap-bd.edu/result/',
				},
			],
		},
		{
			key: '300',
			menu: 'Academic',
			submenu: [
				{
					key: '301',
					name: 'Curriculam',
					link: 'https://cse.uap-bd.edu/academic/curriculum_bsc_new/',
				},
				{
					key: '302',
					name: 'Faculty Members',
					link: 'https://cse.uap-bd.edu/faculty/faculties_list/',
				},
				{
					key: '303',
					name: 'Mission & Outcome',
					link: 'https://cse.uap-bd.edu/academic/mission_outcome/',
				},
				{
					key: '304',
					name: 'Class Routine',
					link: 'https://cse.uap-bd.edu/routine/classroutine/',
				},
				{
					key: '304',
					name: 'Exam Routine',
					link: 'https://cse.uap-bd.edu/routine/examroutine/',
				},
				{
					key: '304',
					name: 'Academic Calendar',
					link: 'https://cse.uap-bd.edu/routine/academic/',
				},
				{
					key: '304',
					name: 'Project and Thesis',
					link: 'https://cse.uap-bd.edu/academic/thesis/',
				},
			],
		},
		{
			key: '400',
			menu: 'Resources',
			submenu: [
				{
					key: '401',
					name: 'Explore Inside',
					link: 'https://cse.uap-bd.edu/academic/explore/',
				},
				{
					key: '402',
					name: 'E-journal',
					link: 'https://cse.uap-bd.edu/#',
				},
			],
		},
		{
			key: '500',
			menu: 'Notice Board',
			submenu: [],
			link: 'https://cse.uap-bd.edu/noticeboard/notice/',
		},
		{
			key: '400',
			menu: 'More',
			submenu: [
				{
					key: '401',
					name: 'Gallery',
					link: 'https://cse.uap-bd.edu/gallery/',
				},
				{
					key: '402',
					name: 'Events',
					link: 'https://cse.uap-bd.edu/noticeboard/events/',
				},
				{
					key: '402',
					name: 'News',
					link: 'https://cse.uap-bd.edu/noticeboard/news/',
				},
				{
					key: '402',
					name: 'Research & Publications',
					link: 'https://cse.uap-bd.edu/noticeboard/research/',
				},
				{
					key: '402',
					name: 'Alumni Stories',
					link: 'https://cse.uap-bd.edu/alumni/story/',
				},
				{
					key: '402',
					name: 'Alumni Association',
					link: 'https://cse.uap-bd.edu/alumni/AlumniCommittee/',
				},
			],
		},
	];

	return (
		<>
			<Navbar
				expand='lg'
				sticky='top'
				style={{
					backgroundColor: '#275CAB',
					height: '80px',
					borderBottom: '3px solid #F26CBE',
				}}
			>
				<Container fluid='xl'>
					<Navbar.Brand href='#home'>
						<Image
							src={Logo}
							height='80px'
							width='315px'
							alt='logo'
							style={{ maxHeight: '20px' }}
						/>
					</Navbar.Brand>

					<div className='collapse navbar-collapse'>
						<Nav className='mx-auto'>
							{menuItems.map((item) => {
								if (item.submenu.length > 0) {
									return (
										<>
											<NavDropdown
												title={
													<span>
														{item.menu}

														<IconContext.Provider
															value={{
																style: {
																	verticalAlign: 'middle',
																	fontSize: '15px',
																	fontWeight: 'bold',
																	marginLeft: '4px',
																},
															}}
														>
															<FiChevronDown />
														</IconContext.Provider>
													</span>
												}
											>
												{item.submenu.map((chield) => {
													return (
														<>
															<NavDropdown.Item
																key={chield.key}
																href={chield.link}
															>
																{chield.name}
															</NavDropdown.Item>
														</>
													);
												})}
											</NavDropdown>
										</>
									);
								} else {
									return <Nav.Link href={item.link}>{item.menu}</Nav.Link>;
								}
							})}
						</Nav>
					</div>
					<Link href='https://admission.uap-bd.edu/Admission/Home.aspx'>
						<a>
							<button className='quiz-btn'>Apply Online</button>
						</a>
					</Link>
					<button className='toggle-btn' onClick={handleShow}>
						<AiOutlineAlignLeft />
					</button>
				</Container>
				{/* sidenav */}
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>
							<Navbar.Brand href='#home'>
								<Image src={Logo} alt='logo' width='50' height='50' />

								{/* <p className='mx-3'>UAP</p> */}
							</Navbar.Brand>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						lorem lipsum dolor sit amet, consectetur
						{/* ..................... */}
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link
							className=''
							onClick={() => setOpen(!open)}
							aria-controls='example-collapse-text'
							aria-expanded={open}
						>
							home
							<IconContext.Provider
								value={{
									style: {
										verticalAlign: 'middle',
										fontSize: '15px',
										fontWeight: 'bold',
										marginLeft: '40px',
									},
								}}
							>
								<FiChevronDown />
							</IconContext.Provider>
						</Nav.Link>
						<Collapse in={open}>
							<div>
								<NavDropdown.Item href='/'>account</NavDropdown.Item>
								<NavDropdown.Item href='/'>admin</NavDropdown.Item>
							</div>
						</Collapse>
						{/* ..................... */}
					</Offcanvas.Body>
				</Offcanvas>
				{/* sidenav */}
			</Navbar>
		</>
	);
};

export default Navigation;
