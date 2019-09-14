import location from '../assets/location.json';

export function getLocation(address) {
  const province = location.find(item => item.code === address.province);
  const district = province.districts.find(
    item => item.code === address.district
  );
  return `${district.name} ${province.name}`;
}
