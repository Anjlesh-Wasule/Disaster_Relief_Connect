// filterResource.js
export function filterResourceRequests(query) {
    const filter = {};

    if (query.recipientAgency) {
        filter.recipientAgency = query.recipientAgency;
    }

    if (query.urgency) {
        filter.urgency = query.urgency;
    }

    if (query.resourceName) {
        filter["requestedResources.resourceName"] = query.resourceName;
    }

    // Add any other filter criteria as needed

    return filter;
}