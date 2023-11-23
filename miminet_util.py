import uuid
import ipaddress

# Get the IP and Mask from string like 1.2.3.4/24
def get_ip_and_mask_from_string(s):

    ip_and_mask = s.split('/')
    if len(ip_and_mask) != 2:
        return []

    try:
        ipaddress.ip_address(ip_and_mask[0])
    except ValueError:
        return []

    if not ip_and_mask[1].isdigit():
        return []

    ip_and_mask[1] = int(ip_and_mask[1])

    if ip_and_mask[1] < 0 or ip_and_mask[1] > 32:
        return []

    return [ip_and_mask[0], ip_and_mask[1]]


def job_id_generator():
    return uuid.uuid4().hex