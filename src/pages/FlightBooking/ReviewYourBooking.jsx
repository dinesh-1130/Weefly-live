import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'

import TakeOffPlane from '../../assets/images/TakeOffPlane.svg'
import AirIndiaLogo from '../../assets/images/AirIndiaLogo.svg'
import FlightLogo from '../../assets/images/FlightIcon.svg'
import White_Concierge from '../../assets/images/ReviewYourBooking/White_Concierage.svg'
import White_Money_Exchange from '../../assets/images/ReviewYourBooking/white_money_exchange.svg'
import White_eSim from '../../assets/images/ReviewYourBooking/white_eSim.svg'
import White_Extra_Luggage from '../../assets/images/ReviewYourBooking/White_Extra_luggage.svg'
import White_Visa_Process from '../../assets/images/ReviewYourBooking/White_Visa_process.svg'
import { useTranslation } from 'react-i18next'

const ServicesOfferedIcons = [
	{ Image: White_Concierge, label: 'Meal' },
	// { Image: White_Money_Exchange, label: "Money exchange" },
	// { Image: White_eSim, label: "E-sim / Internet" },
	{ Image: White_Extra_Luggage, label: 'Extra luggage' },
	{ Image: White_Visa_Process, label: 'Visa process' },
]

export default function ReviewYourBooking() {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const location = useLocation()
	const [flight, setFlight] = useState(null)
	const TicketData = location.state

	console.log(TicketData.outwordTicketId)
	console.log(TicketData.returnTicketId)
	console.log('tripType', TicketData.tripType)
	console.log('travalers', TicketData.travalers)

	// useEffect(() => {
	//   if (location.state && location.state.tripType) {
	//     // setFlight(location.state.flight);
	//     const data =  {location.state.outwordTicketId,
	// 			location.state.returnTicketId,
	// 			location.state.routingId,
	// 			location.state.tripType}
	//     console.log(data);

	//   }
	// }, [location]);

	// useEffect(() => {
	// 	if (location.state && location.state.tripType) {
	// 		const data = {
	// 			outwordTicketId: location.state.outwordTicketId,
	// 			returnTicketId: location.state.returnTicketId,
	// 			routingId: location.state.routingId,
	// 			tripType: location.state.tripType,
	// 		}
	// 		console.log(data)
	// 	}
	// }, [location])
	console.log(TicketData.outwordTicketId)
	const backendUrl = import.meta.env.VITE_BACKEND_URL
	const handleProcessDetails = async () => {
		const flightTickets = []
		const routeid = TicketData.routingId
		let outwardid = TicketData.outwordTicketId.id
		let returnid

		// if (TicketData.tripType === 'Round Trip') {
		// 	returnid = TicketData.returnTicketId.id
		// 	console.log('Hello')
		// }

		if (TicketData.tripType === 'One Way') {
			flightTickets.push(TicketData.outwordTicketId)
		} else if (TicketData.tripType === 'Round Trip') {
			flightTickets.push(
				TicketData.outwordTicketId,
				TicketData.returnTicketId
			)
			returnid = TicketData.returnTicketId.id
		}

		const response = await fetch(`${backendUrl}/process-details`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				routingId: routeid,
				outwardId: outwardid,
				...(returnid && { returnId: returnid }),
			}),
		})

		if (response.ok) {
			const res = await response.json()
			console.log(res)
			const seatOptions =
				res.requiredParameterList[0].RequiredParameter[15]
					.DisplayText[0]
			const LuggageOptions =
				res.requiredParameterList[0].RequiredParameter[16]
					.DisplayText[0]
			console.log(seatOptions)
			console.log(LuggageOptions)
			const AlternativeFares=res.AlternativeFares;
			const structuredFeatures=res.Features;
			console.log(AlternativeFares);
			console.log(structuredFeatures)
			navigate('/booking/TravelersDetails', {
				state: {
					flights: flightTickets,
					routingId: TicketData.routingId,
					travalers: TicketData.travalers,
					tripType: TicketData.tripType,
					seatOption: seatOptions,
					luggageOptions: LuggageOptions,
				},
			})
		}
	}

	return (
		<div className='w-full flex flex-col items-start px-4 sm:px-6 xl:px-0 font-sans'>
			{/* Desktop Layout */}
			{/* {TicketData.tripType === 'one_way'} */}
			{TicketData.tripType === 'One Way' ? (
				<div className='hidden xl:block w-full'>
					<FlightDetailCard
						title={`${t('booking-card.leaving-from')}`}
						flight={TicketData.outwordTicketId}
					/>
				</div>
			) : TicketData.tripType === 'Round Trip' ? (
				<div className='hidden xl:block w-full'>
					<FlightDetailCard
						title={`${t('booking-card.leaving-from')}`}
						flight={TicketData.outwordTicketId}
					/>
					<FlightDetailCard
						title={`${t('booking-card.returning-from')}`}
						flight={TicketData.returnTicketId}
					/>
				</div>
			) : (
				<div className=''></div>
			)}

			{/* Mobile Layout */}
			{TicketData.tripType === 'One Way' ? (
				<div className='xl:hidden w-full'>
					<FlightPriceCard
						title={`${t('booking-card.leaving-from')}`}
						flight={TicketData.outwordTicketId}
					/>
				</div>
			) : TicketData.tripType === 'Round Trip' ? (
				<div className='xl:hidden w-full'>
					<FlightPriceCard
						title={`${t('booking-card.leaving-from')}`}
						flight={TicketData.outwordTicketId}
					/>
					<FlightPriceCard
						title={`${t('booking-card.returning-from')}`}
						flight={TicketData.returnTicketId}
					/>
				</div>
			) : (
				<div className=''></div>
			)}

			{/* Services Section */}
			{/* <div className="bg-white rounded-[17px] px-[20px] sm:px-[44px] py-[30px] mt-[30px]">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center items-start gap-[30px]">
          <p className="text-sm sm:text-[17px] bg-[#FFE2DA] rounded-[13px] px-6 py-3">
            Weefly pro Enjoy Zero Convenience Fee and More @ $2000 rupees
          </p>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#EE5128] size-[20px]" />
            <p className="text-base sm:text-[21px] font-medium">Add now</p>
          </div>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-5 gap-5 mt-8">
          {ServicesOfferedIcons.map((service, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-[55px] h-[55px] bg-[#EE5128] rounded-full flex justify-center items-center">
                <img src={service.Image} alt={service.label} />
              </div>
              <p className="text-xs sm:text-[15px] text-center">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div> */}

			{/* Continue Button */}
			<div className='text-center xl:text-right mt-[40px]'>
				<button
					onClick={() => handleProcessDetails()}
					className='bg-[#EE5128] text-white text-[15px] px-[37px] py-[14px] rounded-[5px] font-semibold text-nowrap hover:bg-[#d64520] active:bg-[#b83b1c] transition-colors duration-200'>
					{t('continue-booking')}
				</button>
			</div>
		</div>
	)
}

function FlightDetailCard({ title, flight }) {
	const { t } = useTranslation()
	return (
		<div className='rounded-[17px] bg-white px-[44px] py-[38px] mt-6'>
			<h4 className='text-[20px] font-semibold flex gap-2 items-center mb-4'>
				{title} <img src={TakeOffPlane} alt='plane' />
			</h4>

			<div className='max-w-[636px] font-semibold text-base text-white bg-[#EE5128] rounded-[7px] flex flex-col sm:flex-row items-center justify-between px-[22px] py-[14px] mb-[24px]'>
				<p>
					{flight?.departureCity} - {flight?.arrivalCity} |{' '}
					{flight?.stops} {t('booking-card.stops')}
				</p>
				<p>
					{t('booking-card.duration')} : {flight?.duration}
				</p>
			</div>

			<div className='flex justify-between items-center mt-6 px-[44px]'>
				{/* Left: Airline */}
				<div className='flex flex-col items-start gap-2 min-w-[100px]'>
					<img
						src={flight?.logo}
						alt={`${flight?.airline} logo`}
						className='h-[30px] object-contain'
					/>
					<p className='text-gray-500 text-sm'>
						{flight?.flightNumber}
					</p>
					<p className='bg-[#008905] text-white text-xs px-2 py-1 rounded'>
						{flight?.class}
					</p>
				</div>

				{/* Center: Times and Plane */}
				<div className='flex-1 flex justify-between items-center'>
					<div className='text-center min-w-[80px]'>
						<p className='text-[32px] font-bold'>
							{flight?.departureTime}
						</p>
						<p className='text-sm text-gray-500'>
							{flight?.departureCity}
						</p>
					</div>

					<div className='flex flex-col items-center gap-2 px-4'>
						<div className='relative w-[220px]  border-t border-dashed border-gray-300'>
							<div className='absolute left-0 w-3 h-3 bg-gray-300 rounded-full -top-[6px] border-2 border-white'></div>
							<div className='absolute right-0 w-3 h-3 bg-gray-300 rounded-full -top-[6px] border-2 border-white'></div>
							<img
								src={FlightLogo}
								alt='Plane'
								className='absolute top-[-12px] left-1/2 transform -translate-x-1/2 w-[24px] h-[24px] bg-white'
							/>
						</div>
						<p className='text-sm text-gray-500'>
							{flight?.duration}
						</p>
						<p className='bg-[#008905] text-white text-xs px-2 py-1 rounded'>
							Refundable
						</p>
					</div>

					<div className='text-center min-w-[80px]'>
						<p className='text-[32px] font-bold'>
							{' '}
							{flight?.arrivalTime}
						</p>
						<p className='text-sm text-gray-500'>
							{flight?.arrivalCity}
						</p>
					</div>
				</div>
			</div>

			<div className='h-px border border-dashed border-gray-300 my-10 relative'>
				<div className='w-10 h-10 bg-gray-100 rounded-full absolute -left-[60px] -top-[20px]'></div>
				<div className='w-10 h-10 bg-gray-100 rounded-full absolute -right-[60px] -top-[20px]'></div>
			</div>

			<div className='flex gap-[42px] text-[18px]'>
				<p>{t('booking-card.Flight-details')}</p>
				<p>{t('booking-card.price-details')}</p>
				<p>{t('booking-card.policy')}</p>
				<p>{t('booking-card.refund')}</p>
				<p>{t('booking-card.reschedule')}</p>
			</div>
		</div>
	)
}

function FlightPriceCard({ title, flight }) {
	const { t } = useTranslation()
	return (
		<div className='bg-white rounded-xl shadow-sm mb-4 overflow-hidden w-full p-4'>
			<div className='flex items-center gap-2 mb-3'>
				<h4 className='text-sm font-semibold text-gray-900'>{title}</h4>
				<img src={TakeOffPlane} alt='plane' className='w-4 h-4' />
			</div>

			<div className='bg-[#EE5128] text-white text-xs font-medium rounded-lg px-4 py-2'>
				<p>
					{flight?.departureCity} - {flight?.arrivalCity} |{' '}
					{flight?.stops} {t('booking-card.stops')}
				</p>
				<span className='ml-2'>
					{t('booking-card.duration')} : {flight?.duration}
				</span>
			</div>

			<div className='flex flex-col items-center mt-4 gap-1'>
				<img
					src={flight?.logo}
					alt={`${flight?.airline} logo`}
					className='h-[30px] object-contain'
				/>
				<p className='text-[11px] text-gray-500'>
					{flight?.flightNumber}
				</p>
				<span className='text-[11px] bg-[#008905] text-white px-2 py-1 rounded'>
					{flight?.class}
				</span>
			</div>

			<div className='flex justify-between items-center mt-4'>
				<div className='text-center'>
					<p className='text-xl font-bold'>{flight?.departureTime}</p>
					<p className='text-[11px] text-gray-500'>
						{flight?.departureCity}
					</p>
				</div>

				<div className='flex-1 flex flex-col items-center mx-2'>
					<div className='w-full border-t border-dashed border-gray-300 relative'>
						<img
							src={FlightLogo}
							alt='flight'
							className='absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white'
						/>
					</div>
					<p className='text-[11px] text-gray-500 mt-1'>
						{flight?.duration}
					</p>
				</div>

				<div className='text-center'>
					<p className='text-xl font-bold'>{flight?.arrivalTime}</p>
					<p className='text-[11px] text-gray-500'>
						{flight?.arrivalCity}
					</p>
				</div>
			</div>

			<div className='mt-4'>
				<p className='text-[#EE5128] font-extrabold text-lg'>
					$1,00,000 <span className='text-sm font-medium'>/pax</span>
				</p>
				<p className='text-[13px] text-gray-400 line-through'>
					$1,50,000
				</p>
			</div>

			<div className='flex justify-between items-center mt-4 border-t pt-3 border-gray-100'>
				<button className='text-[#EE5128] text-sm font-medium'>
					{t('booking-card.Flight-details')} ▼
				</button>
				<button className='bg-[#EE5128] text-white text-sm font-semibold px-4 py-2 rounded'>
					{t('booking-card.book-now')}
				</button>
			</div>
		</div>
	)
}
