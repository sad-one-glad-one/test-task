import React, {useState, useEffect, useRef} from 'react';
import { AppIcon } from '../app-icon/AppIcon';
import AppText from '../app-text/AppText';
import "./index.scss"

const AppSelect = ({label, options, selectedOption, setSelectedOption}) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleSelect = () => {
		setIsOpen(!isOpen)
	}

	const selectRef = useRef(null)

	useEffect(() => {
		let handler = (e) => {
			if(!selectRef.current.contains(e.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("mousedown", handler)

		return() => {
			document.addEventListener("mousedown", handler)
		}
	})

	let flippedChevronClass = "app-select__btn-icon_flipped"

	return (
		<div className="app-select" ref={selectRef}>
			{label && 
				<div className="app-select__label">
					<AppText text={label} fontSize={12} lineHeight={14} />
				</div>
			}
			<button 
				className="app-select__btn"
				onClick={() => toggleSelect()}
			>
				<AppText
					text={selectedOption}
				/>
				<div className={`app-select__btn-icon align-center ${isOpen ? flippedChevronClass : ""}`}>
					<AppIcon
						name="icon-chevron-up"
						width="24"
						height="24"
						color="rgba(0, 0, 0, 0.87)"
					/>
				</div>
			</button>
			{isOpen && (
				<ul className="app-select__list">
					{options.map((option) => (
						<li 
							className="app-select__list-item"
							key={option.name}
							onClick={() => {
								setSelectedOption(option.name)
								toggleSelect()
							}}
						>
							<AppText
								text={option.name}
							/>
						</li>
					))}
				</ul>
				)}
		</div>
	);
};

export default AppSelect;