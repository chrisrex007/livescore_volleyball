import React from "react";

const Athletics=()=> {
	let players = [
		{ id: 1, name: "Shubham Suman", team: "IITKGP", time: 9.26 },
		{ id: 2, name: "Himanshu Kumar", team: "IITP", time: 9.45 },
		{ id: 3, name: "Jayant Singh", team: "IITB", time: 9.56 },
		{ id: 4, name: "Jitendra Kumar", team: "IITG", time: 9.29 },
		{ id: 5, name: "Shubman Gill", team: "IITR", time: 9.16 },
	];

	for (let i = 0; i < players.length; i++) {
		for (let j = 0; j < players.length; j++) {
			if (players[i].time < players[j].time) {
				let t = players[i];
				players[i] = players[j];
				players[j] = t;
			}
		}
	}

	return (
		<div>
			<h2 className="text-2xl text-black m-6 md:m-5">Summary</h2>
			<div className="line h-0.5 bg-slate-300 "></div>
			<div className="hidden md:block bg-[#ade8f4]">
				<div className="grid grid-cols-4 place-items-center  m-auto mt-[2%] mb-[1%] ml-[8%] mr-[8%] lg:ml-[6%] lg:mr-[6%]">
					<div className="text-l text-bold text-gray-500">Rank</div>
					<div className="text-l text-bold text-gray-500">Team</div>
					<div className="text-l text-bold text-gray-500">Participant</div>
					<div className="text-l text-bold text-gray-500">Results</div>
				</div>
			</div>
			{players.map((p, index) => {
				let l;
				let k;
				if (index + 1 === 1) {
					l = "🥇";
					k = true;
				} else if (index + 1 === 2) {
					l = "🥈";
					k = true;
				} else if (index + 1 === 3) {
					l = "🥉";
					k = true;
				} else {
					l = index + 1;
					k = false;
				}
				return (
					<>
						<div className="flex items-center mt-[2%] md:hidden ">
							<div className="container grid grid-cols-2  ">
								<div
									className={
										k
											? "text-4xl flex justify-center items-center ml-[-12%]"
											: "text-3xl flex justify-center items-center ml-[-12%]"
									}
								>
									{l}
								</div>
								<div className="containerItem ml-[-12%]">
									<div className="text-2xl ">{p.name}</div>
									<div className="">{p.team}</div>
									<div className="">Result: {p.time}</div>
								</div>
							</div>
						</div>
						{/* After Medium */}
						<div className="ml-[8%] mr-[8%] hidden md:block lg:ml-[6%] lg:mr-[6%]">
							<div className="grid grid-cols-4 m-2 place-items-center ">
								<div className="text-4xl">{l}</div>
								<div className="text-xl">{p.team}</div>
								<div className="text-2xl">{p.name}</div>
								<div className="text-xl">{p.time}</div>
							</div>
						</div>
						{/* Medium display ended */}
					</>
				);
			})}
		</div>
	);
}

export default Athletics;
