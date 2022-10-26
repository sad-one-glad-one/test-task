import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortData } from '../../store/DataReducer';
import AppButton from '../app-button/AppButton';
import { AppIcon } from '../app-icon/AppIcon';
import AppText from '../app-text/AppText';
import "./index.scss";

const DataTable = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state.fromApi.data)
	let sortingArray = [...data]
	let [sortableTitle, setSortableTitle] = useState([
		{key: "GoodsCommercialName", direction: "ascending", isActive: false},
		{key: "CurrentPrices", direction: "ascending", isActive: false}
	])

	const handleSort = (field) => {
		let paramDirection = field.direction === "ascending" ? 1 : -1
		sortingArray.sort((a, b) => (
			a[field.key] < b[field.key] ? -paramDirection
				: a[field.key] > b[field.key] ? paramDirection
					: 0
			)
		)
		dispatch(sortData(sortingArray))
		toggleSortDirection(field)
	}

	const toggleSortDirection = (sortedObj) => {
		let copySortedArray = Object.assign([], sortableTitle)
		copySortedArray.find(item => {
			item.isActive = false
			if (item === sortedObj) {
				item.isActive = true
				item.direction === "ascending" ?
					item.direction = "descending"
					: item.direction = "ascending"
			}
		})
		setSortableTitle([...copySortedArray])
	}

	const isAccendingNameClass = sortableTitle[0].direction === "ascending" ?
		"table-th__sortable_asc"
		: "table-th__sortable_desc"
	const isAccendingPriceClass = sortableTitle[1].direction === "ascending" ?
		"table-th__sortable_asc" 
		: "table-th__sortable_desc"

	return (
		<div className="table-wrap">
			<table className="table">
				<thead>
					<tr>
						<th
							className={`table-th__sortable ${isAccendingNameClass} `}
							onClick={() => handleSort(sortableTitle[0])}
						>
							<AppText text="Биодобавка" lineHeight={19} />
							<AppIcon 
								className="app-icon"
								name="icon-sort" 
								width="24" 
								height="24" 
								color={sortableTitle[0].isActive ? "#2662C9" : "rgba(0, 0, 0, 0.16)"}
							/>
						</th>
						<th>
							<AppText text="Описание" lineHeight={19} />
						</th>
						<th
							className={`table-th__sortable ${isAccendingPriceClass} `}
							onClick={() => handleSort(sortableTitle[1])}
						>
							<AppText text="Цена за шт., ₽" lineHeight={19} />
							<AppIcon 
								name="icon-sort" 
								width="24" 
								height="24" 
								color={sortableTitle[1].isActive ? "#2662C9" : "rgba(0, 0, 0, 0.16)"}
							/>
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data?.map((item) => (
						<tr key={item?.GoodsCommercialName}>
							<td className="table__product">
								<div className="table__product-img align-center">
									<img src={item?.Picture} />
								</div>
								<AppText
									text={item?.GoodsCommercialName}
									lineHeight={24}
								/>
							</td>
							<td className="table__description">
								<AppText 
									text={item?.CommercialDescription}
									fontSize={14}
									lineHeight={18}
									color={"rgba(0, 0, 0, 0.64)"}
								/>
							</td>
							<td className="table__price">
								<AppText
									text={`${item?.CurrentPrices} ₽`}
									lineHeight={24}
									fontWeight={700}
								/>
							</td>
							<td>
								<AppButton text={"Добавить"} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;