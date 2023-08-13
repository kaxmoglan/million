export enum OptionCardId {
	DESIGN_CONCEPT = 'design-concept',
	DESIGN_PROTOTYPE = 'design-prototype',
	DESIGN_DELIVERY = 'design-delivery',
}

export const getFormSubject = (buttonId: OptionCardId): string => {
	console.log('GET FORM SUBJECT', buttonId);
	switch (buttonId) {
		case OptionCardId.DESIGN_CONCEPT:
			return 'Design Concept Enquiry';

		case OptionCardId.DESIGN_PROTOTYPE:
			return 'Design Prototype Enquiry';

		case OptionCardId.DESIGN_DELIVERY:
			return 'Design Delivery Enquiry';

		default:
			throw new Error('Unknown OptionCardId');
	}
};
