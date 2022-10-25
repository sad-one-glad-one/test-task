import React from 'react';
import { useSelector } from 'react-redux';
import AppButton from '../app-button/AppButton';
import { AppIcon } from '../app-icon/AppIcon';
import AppText from '../app-text/AppText';
import "./index.scss";

const DataTable = () => {
	const data = useSelector(state => state.fromApi.data)

	return (
		<div className="table-wrap">
			<table className="table">
				<thead>
					<tr>
						<th className="table-th__sortable">
							<AppText text="Биодобавка" lineHeight={19} />
							<AppIcon 
								name="icon-sort" 
								width="24" 
								height="24" 
								color="rgba(0, 0, 0, 0.16)"
							/>
						</th>
						<th>
							<AppText text="Описание" lineHeight={19} />
						</th>
						<th className="table-th__sortable">
							<AppText text="Цена за шт., ₽" lineHeight={19} />
							<AppIcon 
								name="icon-sort" 
								width="24" 
								height="24" 
								color="rgba(0, 0, 0, 0.16)"
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
									<img src={item.Picture} />
								</div>
								<AppText
									text={item.GoodsCommercialName}
									lineHeight={24}
								/>
							</td>
							<td className="table__description">
								<AppText 
									text={item.CommercialDescription}
									fontSize={14}
									lineHeight={18}
									color={"rgba(0, 0, 0, 0.64)"}
								/>
							</td>
							<td className="table__price">
								<AppText
									text={`${item.CurrentPrices} ₽`}
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