//
// HACK: copied from @~sunsimiao/cj-dnd-core. duplicating here to fix a CI issue
//
import { Identifier, SourceType, TargetType } from '@~sunsimiao/cj-dnd-core'

export default function matchesType(
	targetType: TargetType | null,
	draggedItemType: SourceType | null,
) {
	if (draggedItemType === null) {
		return targetType === null
	}
	return Array.isArray(targetType)
		? (targetType as Identifier[]).some(t => t === draggedItemType)
		: targetType === draggedItemType
}
