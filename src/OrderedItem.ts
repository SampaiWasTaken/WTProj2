export class OrderedItem
{
	orderId: number
	title: string
	amount: number
	status: number

	constructor(orderId: number, title: string, amount: number, status: number)
	{
		this.orderId = orderId
		this.title = title
		this.amount = amount
		this.status = status
	}
}